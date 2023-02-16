import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo especificado'))
}

async function pegaArquivo(caminho){
    try{
        const texto = await fs.promises.readFile(caminho, "utf-8")
        extraiLinks(texto)
        return texto
    } catch(erro){
        trataErro(erro)
    } 
    }

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura =>({
        [captura[1]]: captura[2]
    }))
    return resultados
}

export default pegaArquivo;
