import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])
    console.log(results);
    useEffect(() => {
        if (term) {
            (async () => {
                const { data } = await axios.get('https://en.wikipedia.org/w/api.php',
                    {
                        params: {
                            action: 'query',
                            list: "search",
                            origin: "*",
                            format: 'json',
                            srsearch: term
                        }
                    })
                setResults(data.query.search)
            })()
        }
    }, [term])

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >GO
                    </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input"
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search