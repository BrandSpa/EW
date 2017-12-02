<?php

use Illuminate\Database\Eloquent\Model;

class Post extends Model {
	protected $post_type = null;
	protected $primaryKey = 'ID';
	protected $table = 'wp_posts';
	const CREATED_AT = 'post_date';
	const UPDATED_AT = 'post_modified';

	public function scopeType($query, $type = 'post')
	{
    	return $query->where('post_type', '=', $type);
	}
	
	public function meta() {
		return $this->hasMany('PostMeta', 'post_id');
	}
}
