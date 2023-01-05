import {environment} from '../../environments/environment'

export const {API,token} = environment;

export const urls = {
  breeds: API + 'v1/breeds',
  images: API + 'v1/images/search?format=json&api_key=' + token,
}
