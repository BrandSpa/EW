<?php

use Illuminate\Database\Eloquent\Model;

class PostMeta extends Model {
	protected $primaryKey = 'meta_id';
	protected $table = 'wp_postmeta';
	protected $fillable = ['meta_key', 'meta_value'];
	public $timestamps = false;

	public function post() {
		return $this->belongsTo('Post');
	}
}
