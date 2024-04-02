import ServicoExercicio from "../services/service.js";
const servico = new ServicoExercicio()

export default class ControllerExercicio {

    Somar(req, res){
      try {
        const num1 = Number(req.body.num1);
        const num2 = Number(req.body.num2);

        const result = servico.Somar(num1, num2);
        
        res.status(200).json({ valor: result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao somar"});
      }
    }

    Subtrair(req, res){
      try {
        const num1 = Number(10);
        const num2 = Number(10);

        const result = servico.Subtrair(num1, num2);
        
        res.status(200).json({ valor: result});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Subtrair"});
      }
    }

    Dividir(req, res){
      try {
        const num1 = Number(req.body.num1);
        const num2 = Number(req.body.num2);

        if(num2 == 0) {
          throw new Error("Não é possível dividir por zero.");
        }
        console.log(num1 , num2);
        if(num1 === null || isNaN(num2)) {
          throw new Error("Favor informar algum valor.");
      }

        const result = servico.Dividir(num1, num2);
        
        res.status(200).json({ valor: result });
       
      } catch (error) {
        res.status(500).json({ message: error.message });
      }}

    Multiplicar(req, res){
      try {
        const num1 = Number(10);
        const num2 = Number(10);

        const result = servico.Multiplicar(num1, num2);
        
        res.status(200).json({ valor: result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Multiplicar"});
      }
    }

}