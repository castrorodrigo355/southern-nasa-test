import {
  CameraName,
  FullName,
  Photo,
  RoverName,
  Status,
} from '@/types/photo.interface';

export const data: Photo[] = [
  {
    id: 102693,
    sol: 1000,
    camera: {
      id: 20,
      name: 'FHAZ' as CameraName,
      rover_id: 5,
      full_name:
        'Front Hazard Avoidance Camera' as FullName.RearHazardAvoidanceCamera,
    },
    img_src:
      'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
    earth_date: new Date('2015-05-30'),
    rover: {
      id: 5,
      name: 'Curiosity' as RoverName,
      landing_date: new Date('2012-08-06'),
      launch_date: new Date('2011-11-26'),
      status: 'active' as Status,
    },
  },
  {
    id: 424939,
    sol: 1000,
    camera: {
      id: 22,
      name: 'MAST' as CameraName,
      rover_id: 5,
      full_name: 'Mast Camera' as FullName.MastCamera,
    },
    img_src:
      'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631130503673E01_DXXX.jpg',
    earth_date: new Date('2015-05-30'),
    rover: {
      id: 5,
      name: 'Curiosity' as RoverName,
      landing_date: new Date('2012-08-06'),
      launch_date: new Date('2011-11-26'),
      status: 'active' as Status,
    },
  },
];
