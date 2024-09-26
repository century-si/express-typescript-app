import * as os from 'os';

/**
 * @method 获取当前机器的ip地址
 */
export function getIpAddress() {
  var ifaces = os.networkInterfaces();
  
  for (var dev in ifaces) {
    let iface: os.NetworkInterfaceInfo[] | undefined = ifaces[dev];
    if(!iface && !Array.isArray(iface)) return
    for (let i = 0; i < iface.length; i++) {
      let { family, address, internal } = iface[i];
      if(family === 'IPv4' && address !== '127.0.0.1' && !internal) {
        return address
      }
    }
  }
}