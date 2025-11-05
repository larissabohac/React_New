
export default function Profile() {
    return (
      <article>
        <h1>Meu Perfil</h1>
        <img src="https://i.imgur.com/7vQD0fP.jpg" alt="Avatar" />
        <p>Olá! Este é meu componente Profile.</p>
      </article>
    );
  }
  
  function Profile(props) {
    return <Avatar {...props} />;
  }