<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use App\Models\ProductTypes;
use App\Models\Categories;
use App\Models\Products;
use App\Models\ProductImage;
use App\Http\Requests\StoreProductRequest;
use App\Services\ImgurService;
use File;
use Validator;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product=Products::where('status',1)->paginate(5);
//        return view('admin.pages.product.list',compact('product'));
         return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $category=Categories::where('status',1)->get();
        $producttype=ProductTypes::where('status',1)->get();
//        return view('admin.pages.product.add',compact('category','producttype'));
         return response()->json(['category'=>$category,'producttype'=>$producttype]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator=Validator::make($request->all(),
        [
            'name' => 'required|min:2|max:255|unique:product,name',
            'description' => 'required|min:2',
            'quantity' => 'required|numeric',
            'price' => 'required|numeric',
            'promotion' => 'numeric',
        ],
        [
            'required' => ':attribute không được bỏ trống',
            'min' => ':attribute tối thiểu có 2 ký tự',
            'max' => ':attribute tối đa có 255 ký tự',
            'numeric' => ':attribute phải là một số ',
            'unique' => ':attribute đã tồn tại trong hệ thống'
        ],
        [
            'name' => 'Tên sản phẩm',
            'description' => 'Mô tả sản phẩm',
            'quantity' => 'Số lượng sản phẩm',
            'price' => 'Đơn giá sản phẩm',
            'promotion' => 'Giá khuyến mại',
        ]
    );
    if($validator->fails()){
        return response()->json(['error'=>'true','message' => $validator->errors()],200);
    }
    $dulieu = $request->only(['name','description','quantity','price','promotion','idCategory','idProductType','status']);
    if($request->hasFile('file')){
        $files=$request->file;
        $product=Products::create($dulieu);
        $idproduct=$product->id;
        foreach($files as $key => $value){
            $file_type= $value->getMimeType();
            if($file_type == 'image/png'|| $file_type=='image/jpg'|| $file_type=='image/jpeg'||$file_type=='image/gif'){
                $file_url = ImgurService::uploadImage($value->getRealPath());
                $product_image['url']=$file_url;
                $product_image['idProduct']=$idproduct;
                ProductImage::create($product_image);
            }else{
                return response()->json(['message' => 'file bạn chọn không phải là hình']);
            }
        }
    }else{
        return response()->json(['message' => 'Ban chua chon hinh']);
    }
        return response()->json(['message' => 'Thêm thành công']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $product = Products::find($id);
        return response()->json(['product' => $product],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
//        $category = Categories::where('status',1)->get();
//        $producttype = ProductTypes::where('status',1)->get();
//        $product = Products::find($id);
//        return response()->json(['category' => $category, 'producttype' => $producttype, 'product' => $product],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator=Validator::make($request->all(),
        [
            'name' => 'required|min:2|max:255',
            'description' => 'required|min:2',
            'quantity' => 'required|numeric',
            'price' => 'required|numeric',
            'promotion' => 'numeric',
        ],
        [
            'required' => ':attribute không được bỏ trống',
            'min' => ':attribute tối thiểu có 2 ký tự',
            'max' => ':attribute tối đa có 255 ký tự',
            'numeric' => ':attribute phải là một số ',
            'unique' => ':attribute đã tồn tại trong hệ thống'
        ],
        [
            'name' => 'Tên sản phẩm',
            'description' => 'Mô tả sản phẩm',
            'quantity' => 'Số lượng sản phẩm',
            'price' => 'Đơn giá sản phẩm',
            'promotion' => 'Giá khuyến mại',
        ]
        );
        if($validator->fails()){
            return response()->json(['error'=>'true','message' => $validator->errors()],200);
        }
        $product = Products::find($id);
        $idproduct=$product->id;
        $data = $request->only(['name','description','quantity','price','promotion','idCategory','idProductType','status']);
        $image=ProductImage::where('idProduct',$id)->get();
            if($request->hasFile('image')){
                foreach ($image as $key => $giatri) {
                        $giatri->delete();
                }
                $file= $request->image;
                foreach($file as $value){
                    $file_name= $value->getClientOriginalName();
                    //lấy loại file
                    $file_type= $value->getMimeType();
                    //lấy kích thước file
                    $file_size= $value->getSize();

                    if($file_type == 'image/png'|| $file_type=='image/jpg'|| $file_type=='image/jpeg'||$file_type=='image/gif'){
                        if($file_size <= 1048576){
                            $file_url = ImgurService::uploadImage($value->getRealPath());
                            $product_image['url']=$file_url;
                            $product_image['idProduct']=$idproduct;
                            ProductImage::create($product_image);
                        }else{
                            return response()->json(['error'=>'Bạn không thể upload anh quá 1mb']);
                        }

                    }else{
                        return response()->json(['error'=>'File bạn chon không phải là hình ảnh']);
                    }
                }
            }
        $product->update($data);
        return response()->json(['result' => 'Đã sửa thành công sản phẩm có id là '.$id],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product =Products::find($id);
        $image=ProductImage::where('idProduct',$id)->get();
        if(count($product->ProductImg)===0){
             if($product->delete()){
             return response()->json(['result' => 'Đã xóa thành công loại sản phẩm có id '.$id],200);
             }
         }else{
             foreach ($image as $key => $value) {
                 $value->delete();
             }
             if($product->delete()){
             return response()->json(['result' => 'Đã xóa thành công loại sản phẩm có id '.$id],200);
             }
         }
    }
    public function getDetail($id){
        $productdetail=Products::find($id);
        if(empty($productdetail)){
            return response()->json(['error'=>'Khong tim thay san pham']);
        }
        $productdetail->ProductImg;
        $productdetail->Category;
        $productdetail->ProductType;
        return response()->json(['productdetail'=> $productdetail]);
    }

    public function getAllProduct(){
        $product = Products::all();
        $data=[];
        foreach ($product as $key => $value) {
            $value->Category;
            $value->ProductType;
            $value->ProductImg;
            $data[$key]=$value;
        }
        return response()->json(['product'=>$data]);

    }
    public function getProductImgByProduct(){
        $product = Products::all();
        $data=[];
        foreach ($product as $key => $value) {
            $value->ProductImg;
            $data[$key]=$value;
        }
        return response()->json(['product'=>$data]);
    }

    public function getProductByCategoryId($categoryId){
        $product = Products::where('idCategory', $categoryId)->get();
        return response()->json(['product'=>$product]);
    }
}
