import React from 'react'
import {
  NODE_PARAGRAPH,
  NODE_UL,
  render,
} from 'storyblok-rich-text-react-renderer';
import { resizeImage } from '../utils/resizing';

function resizedImage(imageUrl) {
  if (!imageUrl) {
    return null;
  }

  return imageUrl.filename.replace(
    '//a.storyblok.com',
    '//img2.storyblok.com/300x0'
  );
}

function renderGood(document) {
  return render(document, {
    nodeResolvers: {
      [NODE_PARAGRAPH]: (children) => children,
      [NODE_UL]: (children) => (
        <ul className="list-disc list-inside pl-2">{children}</ul>
      ),
    },
  });
}

const Recipe = ({ recipe }) => {
  const [isFullScreen, setFullscreen] = React.useState(false);

  async function toggleFullScreen() {
    if (!document.fullscreenElement) {
      const fullScreenElement = await document.documentElement.requestFullscreen();
      console.log('Now fullscreen:', fullScreenElement);
      setFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }

  const toggleFullScreenForRecipe = () => {
    toggleFullScreen();
  };

  return (
    <article
      data-fullscreen={ isFullScreen }
      className={`
        p-6
        m-2 rounded-lg shadow-sm
        bg-white
        data-[fullscreen=false]:max-w-lg
        data-[fullscreen=true]:fixed
        data-[fullscreen=true]:top-0
        data-[fullscreen=true]:left-0
        data-[fullscreen=true]:p-12
        data-[fullscreen=true]:w-full
        data-[fullscreen=true]:h-screen
        data-[fullscreen=true]:z-10
        data-[fullscreen=true]:m-0
        overflow-scroll
      `}
      onClick={ () => toggleFullScreenForRecipe() }
    >
      <h3 className="text-2xl font-serif mb-4">{recipe.title}</h3>

      <img
        src={resizeImage(recipe.hero_image, '300x400')}
        className="
          mb-2
          rounded-xl
          w-full
        "
      />

      <div className="py-5">
        <h4 className="text-lg font-semibold">Ingredients:</h4>

        {renderGood(recipe.ingredients)}
      </div>

      <div className="">
        <h4 className="text-lg font-semibold">Directions:</h4>

        {renderGood(recipe.directions)}
      </div>

      <div className="pt-4 mt-4 flex text-gray-700 text-sm relative sm:flex sm:flex-col">
        <div>Recipe by {recipe.author}</div>
      </div>
    </article>
  );
};

export default Recipe;
