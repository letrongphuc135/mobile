<?php

namespace App\Http\Controllers;
use App\User;
use App\Models\Products;
use App\Models\Comment;
use App\Models\AdminComment;
use Auth;
use Validator;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function addComment(Request $request,$id){
        if(Auth::check()){
            $data['noidung']=$request->noidung;
            $data['idUser']=Auth::user()->id;
            $data['idProduct']=$id;
            $comment=Comment::create($data);
            return response()->json(['message'=>'bình luận thành công','comment'=>$comment]);
        }else{
            return response()->json(['message'=>'bạn phải đăng nhập trước khi bình luận']);
        }
    }
    public function getComment($id){
        $comment=Comment::where('idProduct',$id)->get();
        $data=[];
        foreach ($comment as $key => $value){
            $value->user;
            $value->admincomment;
            $data[$key]=$value;
        }
        return response()->json(['data'=>$data]);
    }
}
