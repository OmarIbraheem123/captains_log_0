const React = require('react')

function Show(props){
    return(
        <div>
            <a herf='/logs'>Go back to Index Page </a>
            <h1>{props.log.Title}</h1>
            <p>
                The {props.log.Title} is {props.log.Entry} and
                {props.log.shipIsBroken? 'Ship is Broken': 'Ship is not Broken'}
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method="post">
                <input type="submit" value={`Delete this ${props.log.Title}`} />
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.Title}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show