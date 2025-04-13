import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom'

const PostDetails = () => {

    let params = useParams()
    let [searchParams] = useSearchParams()
    console.log(searchParams.getAll('page'))
    console.log(searchParams.getAll('code'))
    console.log(params)

    return(
        <div className="panel panel-info">
        <div className="panel-heading">
            <h2>{params.topic}</h2> Details
        </div>
        <div className="panel-body">
            <p>
                {params.topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>You are on page number {searchParams.getAll('page')}</h3>
        </div>
        <ul>
            {Array.from(searchParams.entries()).map(([key,value]) => (
                <li key={key}>
                    {key}:{value}
                </li>
            ))}
        </ul>

    </div>
    )
}
export default PostDetails