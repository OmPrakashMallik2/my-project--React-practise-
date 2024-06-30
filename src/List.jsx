import React from 'react'
import PropTypes from 'prop-types'

function List(props) {
    const fruites = props.itemsList;

    fruites.sort((a, b) => a.calories - b.calories);

    // const lowCalFruites = fruites.filter(fruite => fruite.calories >= 90 && fruite.calories <= 100);

    const listedFruites = fruites.map((fruite, index) => <li key={fruite.id}>{index + 1}. {fruite.name} - {fruite.calories}</li>);
    return (
        <>
            <div className='p-5 bg-purple-200 text-xl font-bold'>
                <h1 className='text-2xl'>{props.listName}:</h1>
                <ul className='p-3'>{listedFruites}</ul>
            </div>
        </>
    );
}

List.propTypes = {
    listName: PropTypes.string,
    itemsList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
}

List.defaultProps = {
    listName: "List Name",
    itemsList: []
}

export default List
