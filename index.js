import chalk from 'chalk';
import fs from 'fs'

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não há arquivo especificado'))
}

async function pegaArquivo(caminho){
    try{
        const texto = await fs.promises.readFile(caminho, "utf-8")
             console.log(chalk.green(texto))
    } catch(erro){
        trataErro(erro)
    }
    }

    pegaArquivo('./arquivos/text')
   

