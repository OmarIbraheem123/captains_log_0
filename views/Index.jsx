const React = require('react')

function Index (props) {
    return(
        <div>
            <h1>Logs Index Page</h1>
            <a href='/logs/new'>Create A New Log Here </a>
            <ul>
                {
                    props.logs.map((log) => {
                        return(
                            <li key={logs._id}>
                                <a href={`/logs/${log_id}`}>{log.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index