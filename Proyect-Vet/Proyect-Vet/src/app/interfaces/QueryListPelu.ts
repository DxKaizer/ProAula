export interface peluqueria{
    getConsultas(): unknown;
    ID?: number;
    FechaEntrada: Date;
    Hora: string;
    NombreAnimal: string;
    NombreDueno: string;
    Especie: string;
    Raza: string;
    Color: string;
    Telefono: string;
    PeluqueroResponsable: string;
    Observaciones: string;
    TipoBano: string;
    Valor: number;
    HoraSalida: string;
}