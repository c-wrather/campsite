import { CAMPSITES } from '../../app/shared/CAMPSITES';

// Define and export Selector functions
export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};