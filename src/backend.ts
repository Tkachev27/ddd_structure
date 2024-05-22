import { Observable, of } from 'rxjs';

export interface Device {
  model: string;
  ip: string;
}

export interface DeviceRequest {
  count: number;
  filter: string | null;
  pageNumber: number;
}

export const DeviceTypes = ['ESR', 'MES', 'ME', 'SMG', 'WLC'];

function getRandomNumber(min = 1, max = 10): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomIp(): string {
  const min = 1;
  const max = 256;
  // eslint-disable-next-line max-len
  return `${getRandomNumber(min, max)}.${getRandomNumber(min, max)}.${getRandomNumber(min, max)}.${getRandomNumber(min, max)}`;
}

function getRandomModel(filter: string | null): string {
  if (filter) { return filter; }

  const min = 0;
  const max = 5;
  const index = getRandomNumber(min, max);
  return DeviceTypes[index];
}


export function getDevices(request: DeviceRequest): Observable<{ devices: Device[], total: number }> {
  const deviceArr = [];
  for (let i = 0; i < request.count; i++) {
    deviceArr.push({
      ip: getRandomIp(),
      model: getRandomModel(request.filter),
    });
  }

  return of({ devices: deviceArr, total: deviceArr.length * getRandomNumber() });
}
