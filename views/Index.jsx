const React = require('react')

function Index (props) {
    return(
        <div>
            <h1>Logs Index Page</h1>
            <a href='/logs/Show'>Create A New Log Here </a>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="post">
                <input type="submit" value={`Delete this ${props.log.Title}`} />
            </form>
            <ul>
                {
                    props.logs.map((log) => {
                        return(
                            <li key={logs._id}>
                                <a href={`/logs/${log_id}`}>{log.Title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index