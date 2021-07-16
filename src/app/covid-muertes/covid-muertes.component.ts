import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service'

@Component({
  selector: 'app-covid-muertes',
  templateUrl: './covid-muertes.component.html',
  styleUrls: ['./covid-muertes.component.css']
})
export class CovidMuertesComponent implements OnInit {
  public resultadosApiCovid : any =[]
  public datosPais = {
    nombre: "",
    abreviatura: "",
    capital:"",
    poblacion:0,
    localizacion:""
  }
  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.load_Data_Covid()
  }
  public load_Data_Covid(){
    const respuesta = this.RestService.GET_DATA_COVID_MUERTES('https://covid-api.mmediagroup.fr/v1/history?country=Ecuador&status=deaths')
    .subscribe(respuesta => {
      var resp: any = respuesta;
      this.datosPais.nombre = resp.All.country
      this.datosPais.abreviatura = resp.All.abbreviation
      this.datosPais.capital = resp.All.capital_city
      this.datosPais.poblacion = resp.All.population
      this.datosPais.localizacion = resp.All.location

     // this.datosPais = this.resultadosApiCovid.All.dates
     //  console.log(this.resultadosApiCovid.All)
     const stringdatos = JSON.stringify(resp.All.dates)
     var result = stringdatos.substring(1, stringdatos.length-1);
     this.resultadosApiCovid = result.split(',').reverse()

     
    })

  }

}
