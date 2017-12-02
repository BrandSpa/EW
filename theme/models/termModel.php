<?php

use \Illuminate\Database\Eloquent\Model;

class Term extends Model  {
    protected $table = 'wp_terms';
		protected $primaryKey = 'term_id';
		
    public function meta() {
      return $this->hasMany('Meta', 'term_id')
                    ->select(['term_id', 'meta_key', 'meta_value']);
    }
}