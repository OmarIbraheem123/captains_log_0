const React = require('react')


function New (props) {
    return (
        <div>
        <form action='/logs' method='POST'/><br/>
        Title:<input type='text' name='title'/><br/>
        Entry:<input type='text' name='entry'/><br/>
        Ship is Broken: <input type='checkbox' name='shipIsBroken'/>
        <input type='submit'/>
        </div>
    )
}

module.exports = New