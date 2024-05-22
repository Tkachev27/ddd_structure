import { Observable, of } from 'rxjs';

export const DeviceTypes = ['ESR', 'MES', 'ME', 'SMG', 'WLC'];

function getRandomIp(): string {
  const min = 1;
  const max = 256;
  // eslint-disable-next-line max-len
  return `${Math.floor(Math.random() * (max - min) + min)}.${Math.floor(Math.random() * (max - min) + min)}.${Math.floor(Math.random() * (max - min) + min)}.${Math.floor(Math.random() * (max - min) + min)}`;
}

function getRandomModel(filter: string | null): string {
  if (filter) { return filter; }

  const min = 0;
  const max = 5;
  const index = Math.floor(Math.random() * (max - min) + min);
  return DeviceTypes[index];
}

export interface Device {
  model: string;
  ip: string;
}

export function getDevices(count: number, filter: string | null): Observable<Device[]> {
  const deviceArr = [];
  for (let i = 0; i < count; i++) {
    deviceArr.push({
      ip: getRandomIp(),
      model: getRandomModel(filter),
    });
  }

  return of(deviceArr);
}
