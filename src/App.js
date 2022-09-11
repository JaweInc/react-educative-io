import React, { useEffect } from 'react';
import { useReducer } from 'react';
import './App.css';
// import axios from 'axios'


const App = () => {

  const setIsLoading = (isLoading) => {
    return isLoading
  }
  const storiesReducer = (state, action) => {
    if (action.type === 'SET_STORIES') {
      return action.payload;
    }
    else {
      throw new Error();
    }
  }

  const [stories, dispatchStories] = useReducer(
    storiesReducer,
    []
  )

  useEffect(() => {
    setIsLoading('Loading...')

    getAsyncStories()
    .then(result => {
      dispatchStories({
        type: 'SET_STORIES',
        payload: result.data.stories
      });

      setIsLoading('Done')
    }).catch((e) => console.error(e))
  }, [])

  const handleRemoveStory = () => {
    const newStories = stories.filter(story => 
      items.objectID !== story.objectID
    );

    dispatchStories({
      type: 'SET_STORIES',
      payload: newStories
    })
  }
  return (
    <></>
  )
}

export default App