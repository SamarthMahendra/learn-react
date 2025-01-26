// pages/index.js

import Profile from './components/profile';
import RecipeList from './qcomps/recipes';
import List from './qcomps/list_keys_id';
import Gallery from './qcomps/gallery_props';

export default function Home() {
    return (
        <main>
            {/* Profiles Section */}
            <section>
                <h2>Profiles</h2>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Profile />
                    <Profile />
                    <Profile />
                </div>
            </section>

            {/* Recipes Section */}
            <section>
                <h2>Recipes</h2>
                <RecipeList />
            </section>

            {/* People Section */}
            <section>
                <h2>People</h2>
                <List />
            </section>

            {/* Gallery Section */}
            <section>
                <h2>Gallery</h2>
                <Gallery />
            </section>
        </main>
    );
}
