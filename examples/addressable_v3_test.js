const {
  ControlAddressable,
  AddressableColorStopMode,
  SingleSegmentsMode,
  AddressableCustomModeStep,
} = require("../");

const controller = new ControlAddressable("192.168.178.254", {
  log_add_received: true,
  command_timeout: null,
});

// const steps = [
//     (new AddressableCustomModeStep())
//         .setEffect(5)
//         .setForegroundColor(0,0,255)
//         .setBackgroundColor(0,255,0),
//         (new AddressableCustomModeStep())
//         .setEffect(8)
//         .setForegroundColor(255,0,0)
//         .setBackgroundColor(0,255,0),
//         (new AddressableCustomModeStep())
//         .setEffect(2)
//         .setForegroundColor(255,0,0)
//         .setBackgroundColor(0,255,0)
// ];

// const mode = new SingleSegmentsMode(160);
// mode.setPointColor(0, 255, 0, 0);
// mode.setPointColor(80, 255, 0, 0);
// mode.setEffect('running_water')

async function main() {
  const config = await controller.queryDeviceConfig();
  console.log(await controller.queryDeviceConfig());
//   const mode = new AddressableColorStopMode(config.pixel_count)
//     .setEffect("jump")
//     .setSpeed(50)
//     .addColorStop(0, 255, 0, 0)
//     .addColorStop(40, 0, 0, 255)
//     .addColorStop(80, 255, 0, 0)
//     .addColorStop(120, 0, 0, 255)
//     .addColorStop(159, 255, 0, 0)
const mode = new AddressableColorStopMode(config.pixel_count)
	.addColorStop(0, 255, 0, 0)
	.addColorStop(80, 0, 0, 255)
    .setEffect("running_water")
    .setSpeed(10)
    

//   await controller.turnOff();

  // await controller.setIAPattern(20, 50);

  console.log(await controller.setColor(0, 10, 0));

//   await controller.setRbmMode(1, 100, 10);
//   await controller.turnOn();
  await controller.setMultiColorMode(mode);


  //
  console.log(await controller.queryDeviceConfig());
  console.log(await controller.queryState());
  
}

main()
  .then(
    () => {},
    (err) => console.error(err)
  )
  .catch((err) => console.log(err));
