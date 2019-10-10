import React from 'react'

const ListaTarefas = props => (
    <ul>
        {props.tarefas.map((tarefa, index) => (
            <li key={index}>
                {tarefa}
            </li>
        ))}
    </ul>
)


// const ListaTarefas = React.memo(function ListaTarefas(props) {
//     return (
//         <ul>
//             {props.tarefas.map((tarefa, index) => (
//                 <li key={index}>
//                     {tarefa}
//                 </li>
//             ))}
//         </ul>
//     )
// })


export default ListaTarefas