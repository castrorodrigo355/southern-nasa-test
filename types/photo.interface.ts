export interface Data {
  photos: Photo[];
}

export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: Date;
  rover: Rover;
}

export interface Camera {
  id: number;
  name: CameraName;
  rover_id: number;
  full_name: FullName;
}

export enum FullName {
  ChemistryAndCameraComplex = 'Chemistry and Camera Complex',
  FrontHazardAvoidanceCamera = 'Front Hazard Avoidance Camera',
  MastCamera = 'Mast Camera',
  NavigationCamera = 'Navigation Camera',
  RearHazardAvoidanceCamera = 'Rear Hazard Avoidance Camera',
}

export enum CameraName {
  Select = 'Select',
  Chemcam = 'CHEMCAM',
  Fhaz = 'FHAZ',
  Mast = 'MAST',
  Navcam = 'NAVCAM',
  Rhaz = 'RHAZ',
  // Pancam = 'PANCAM',
}

export interface Rover {
  id: number;
  name: RoverName;
  landing_date: Date;
  launch_date: Date;
  status: Status;
}

export enum RoverName {
  Curiosity = 'Curiosity',
  Opportunity = 'Opportunity',
  Spirit = 'Spirit',
}

export enum Status {
  Active = 'active',
}
