import './WishlistListing.css';

export const WishlistListing = () => {

	return (
		<div>
            Hello Wishlist
			{/* {state.wishlist.length === 0 ? (
				<div className='empty-product'>"Your Wishlist is empty"</div>
			) : (
				<div className='wishlist-container'>
					<div className='wishlist-heading'>
						<strong>My Wishlist</strong> - {state.wishlist.length} items
					</div>
					<div className='wishlist-wrapper'>
						{state.wishlist.map(({ _id, product, inWishlisted }) => {
							return (
								<Link to={`/product/${product._id}`}>
									<WishlistCard
										product={product}
										inWishlisted={inWishlisted}
										key={_id}
									/>
								</Link>
							);
						})}
					</div>
				</div>
			)}
			{state.toast.message && <Toast message={state.toast.message} />} */}
		</div>
	);
};
