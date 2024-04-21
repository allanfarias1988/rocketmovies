import { BackgroundImg, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

function SinIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { SignIn } = useAuth();

    function handleSigIn() {
        SignIn({ email, password });
    }
    return (
        <Container>
            <div className="formWrapper">
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h3>Faça seu login</h3>
                <Form id="login">
                    <Input icon={FiMail} placeholder="E-mail" type="email" onChange={event => setEmail(event.target.value)} />
                    <Input icon={FiLock} placeholder="Senha" type="password" onChange={event => setPassword(event.target.value)} />
                    <Link to="/home">
                        <Button title="Entrar" onClick={handleSigIn} />
                    </Link>
                </Form>
                <Link to="/register">
                    Criar Conta
                </Link>
            </div>
            <BackgroundImg />
        </Container>
    )
}

export default SinIn;