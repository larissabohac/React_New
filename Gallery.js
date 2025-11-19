import Profile from "./Profile";

export default function Gallery() {
    return (
        <section >
            <h1 className="text-center">Amazing scientists</h1>
            <div className="container d-flex flex-row align-items-center mt-2 mb-2">
                <Profile />
                <Profile />
                <Profile /> 
            </div>
          
        </section>
    );
}