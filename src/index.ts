import { AddressInfo } from "net";
import app from "./presentation/index";

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

//Respostas dos desafios:
//1. A) Através da arquitetura desenvolvida, implementação do nome e data de nascimento foi sem dificuldades,
//tivemos que acrescentar no entities as variáveis e os gets, no signup do use case também foram adicionadas
//os elementos de nome e data de nascimento. Da mesma forma no data e no endpoint.
//
//B) Ele não consegue buscar as novas infomações de usuário, pois não foram implementadas nesse endpoint. 