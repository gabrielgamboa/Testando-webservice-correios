const soap = require('soap');

const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, (err, client) => {
    if (err) {
        return 
    } else {
        client.consultaCEP({
            cep: '13453120'
        }, (err, client) => {
            console.log(client.return);
        })
    }
})