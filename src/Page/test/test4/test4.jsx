import React from 'react';
import {Test4Style} from './test4Style';

export const Test4 = () => {

	return (
		<Test4Style>
			<div className="items">
				<div className="item">
					<img src="/Images/product-01.png" alt="product1"/>
					<div className="caption">
						<h2>Rirakuma doll 25cm</h2>
						<p>
							The owner of the most popular and
							cute looks Rilakkuma ~!
							Rilakkuma giant - It is size sale to small size.
						</p>
						<p>Price : <s>$12</s> → $10</p>
						<a href="#none">View Details</a>
					</div>
				</div>
				<div className="item">
					<img src="/Images/product-02.png" alt="product2"/>
					<div className="caption">
						<h2>Connie doll (110cm)</h2>
						<p>
							The owner of the most popular and
							cute looks Rilakkuma ~! Rilakkuma
							giant - It is size sale to small size.
						</p>
						<p>Price : <s>$42</s> → $40</p>
						<a href="#none">View Details</a>
					</div>
				</div>
				<div className="item">
					<img src="/Images/product-03.png" alt="product3"/>
					<div className="caption">
						<h2>Cacao Friends figure</h2>
						<p>
							The owner of the most popular and
							cute looks Rilakkuma ~! Rilakkuma
							giant - It is size sale to small size.
						</p>
						<p>Price : <s>$32</s> → $30</p>
						<a href="#none">View Details</a>
					</div>
				</div>
			</div>
		</Test4Style>
	)
}