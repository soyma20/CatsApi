import {environment} from '../../environments/environment'

export const {API,token} = environment;

export const urls = {
  breeds: API + 'v1/breeds?limit=1000&page=0',
  images: API + 'v1/images/search?format=json&limit=10&api_key=' + token,
}
