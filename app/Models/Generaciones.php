<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Generaciones extends Model
{
    use HasFactory;
    protected $table = 'generaciones';
    protected $fillable = ['nombre','tutores_asignados','estatus_asignada'];

    public $timestamps = false;


}
