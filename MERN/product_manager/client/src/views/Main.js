import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList';
import axios from 'axios';
export default () => {

    return (
        <div>
            <h1>Welcome to the grocery store where everything is under $300</h1>
            <h2>Oh ya! this is the product manager for that store</h2>
            <ProductForm />
            <ProductList />
        </div>
    )
} 