import React from 'react';

// These imports will now work perfectly with your new folder structure.
import SubNav from './SubNav/SubNav';
import HeroPage from './Hero/HeroPage';
import VideoHero from './VideoHero/VideoHero';
import HorizontalGallery from './HorizontalGallery/HorizontalGallery';
import HelpMeChoosePromo from './HelpMeChoosePromo/HeipMeChoosePromo';

const MacPage = () => {
    return (
        <main>
            <SubNav />
            <HeroPage />
            <VideoHero />
            <HorizontalGallery />
            <HelpMeChoosePromo />
        </main>
    );
};

export default MacPage;