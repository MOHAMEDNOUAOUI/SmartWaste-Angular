import { createAction, props } from "@ngrx/store";
import { Vehicule, VehiculeCreateDTO, VehiculeDTO } from "../../Models/Vehicule.modules";
import { FormGroup } from "@angular/forms";


export const LoadAllVehicules = createAction('[Vehicule] Load Vahicules');
export const LoadAllVehiculesSuccess = createAction('[Vehicule] Load Vahicules' , props<{vehicules:Vehicule[]}>());
export const LoadAllVehiculesFailed = createAction('[Vehicule] Load Vahicules' , props<{error:Error}>());

export const CreateVehicule = createAction('[Vehicule] Create Vehicule' , props<{vehicule:VehiculeCreateDTO}>());
export const CreateVehiculeSuccess= createAction('[Vehicules] Create Vehicule Success' , props<{vehicules:Vehicule[]}>());
export const CreateVehiculeFailed = createAction('[Vehicule] Create Vehicule Failed' , props<{error:Error}>());