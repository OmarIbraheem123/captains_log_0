const React = require( 'react')

function Edit  (props) {
    const {Title, _id, shipIsBroken, Entry} = props.log
    return(
        <div>
            <h1>{Title}Edit Page</h1>
             <a herf='/logs'>Go back to Index Page </a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title:<input type="text" name="Title"defaultValue={Title}/><br/>
                Entry: <input type="text" name = "Entry" defaultValue={Entry}/><br/>
                Ship Is Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name='shipIsBroken'/> }<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit