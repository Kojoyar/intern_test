import { useProducts } from '../../../contexts/ProductContextProvider';
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import FilterProduct from '../../products/FilterProduct/FilterProduct';
import { Container, Navbar } from 'react-bootstrap';

const ProductSideBar = ({isSidebar, setPage }) => {
	const { products, getProducts, fetchByParams } = useProducts();
	const [searchParams, setSearchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('q') || '');
	useEffect(() => {
		setSearchParams({
			q: search
		})
	}, [search])

	useEffect(() => {
		getProducts();
		setPage(1);
	}, [searchParams])

	return isSidebar? (
			<div className='filterContent'>
				<Navbar expand="lg" >
					<Container className='mr-50 ml-50 cat ' >
						<div className="search-block d-flex ">
							<input
                // style={{width: '20%', boxSizing: 'border-box', margin: '8px, 0px', padding: '12px, 20px'}}
								value={search}
								onChange={e => setSearch(e.target.value)}
								placeholder="Поиск..."  />
						</div>

            <FilterProduct/>
					</Container>
				</Navbar>
			</div>
	): (
    null
  )
}

export default ProductSideBar