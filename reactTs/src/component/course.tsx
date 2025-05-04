import {type ReactNode, PropsWithChildren } from "react";

// interface CourseProps{
//     title:string;
//     children:ReactNode
// }

type CourseProps = PropsWithChildren<
    {
        id:number;
        title:string;
        onDelete: (id:number) => void
    }
>
export default function Course({id,title,children,onDelete}:CourseProps){
    return(
        <article>
            <div>
                <h3>{id}</h3>
                <h2>{title}</h2>
                <p>{children}</p>

            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}


// interface CourseProps{
//     title:string;
//     description:string
// }
// export default function Course({title,description}:CourseProps){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{description}</p>

//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default function Course({title,description}:{
//     title:string;
//     description:string
// }){
//     return(
//         <article>
//             <div>
//                 <h2>Title</h2>
//                 <p>Description</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }


// export default function Course(props:{
//     title:string;
//     description:string
// }){
//     return(
//         <article>
//             <div>
//                 <h2>Title</h2>
//                 <p>Description</p>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }