import Destructi from "./destructi";

function App() {
    return (
        <div>
            <h1>User Details</h1>

            <Destructi
                name="Loki"
                city="Asgard"
                age={23}
                mail="loki@gmail.com"
                PhoneNumber={9597572031}
            />

            <Destructi
                name="Thor"
                city="Asgard"
                age={1500}
                mail="thor@gmail.com"
                PhoneNumber={9597572030}
            />

            <Destructi
                name="Vision"
                city="Boston"
                age={23}
                mail="vision@gmail.com"
                PhoneNumber={9597572034}
            />

            <Destructi
                name="Mobius"
                city="TVA"
                age={40}
                mail="mobius@gmail.com"
                PhoneNumber={9597572035}
            />

            <Destructi
                name="Dr Doom"
                city="Latveria"
                age={45}
                mail="doom@gmail.com"
                PhoneNumber={9597572036}
            />
        </div>
    );
}

export default App;