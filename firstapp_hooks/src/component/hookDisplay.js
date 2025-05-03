import React,{useState,useMemo} from 'react';


const ProductData = [
    {id:1,name:'Car',price:500},
    {id:2,name:'Bike',price:300},
    {id:3,name:'Cycle',price:100}
]

const HookList = () => {
    const [search,setSearch] = useState('');
    const [sortOrder,setSortOrder] = useState('asc');

    const filteredAndSorted = useMemo(() => {
        console.log('Filtering and sorting.....')

        const filtered = ProductData.filter(p => 
            p.name.toLowerCase().includes(search.toLowerCase())
        )

        const sorted = [...filtered].sort((a,b) => 
            sortOrder === 'asc' ? a.price -b.price : b.price-a.price
        );
        return sorted
    },[search, sortOrder])

    return(
        <div>
            <input
            value={search}
            onChange={e => setSearch(e.target.value)}/>
            <select onChange={e => setSortOrder(e.target.value)}>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>

            <ul>
                {filteredAndSorted.map(product => (
                    <li key={product.id}>
                        {product.name}: ${product.price}
                    </li>
                ))}
            </ul>
        </div>

    )

}


export default HookList