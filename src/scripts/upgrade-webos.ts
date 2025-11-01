/* # Example of grabbing variables from zsh terminal
# You can pass values into the script by setting variables and then running it, e.g.:
#   IPK_PATH="$HOME/dev/webos/ipks/a.ipk"
#   DEVICE_NAME="MyPlayerWired"
#   APP_ID="com.lg.app.signage.dev"
#
#   ./upgrade-webos.sh "$DEVICE_NAME" "$IPK_PATH" "$APP_ID"
#
# Inside the script, handle the arguments as follows: */

const IPK_DIR = Array.from(process.argv).slice(2).toString().split('=')[1] || ;
const 
console.log(IPK_DIR);
process.exit(0)