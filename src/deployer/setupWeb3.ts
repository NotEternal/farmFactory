import { setState, getState } from './state'


const networks = {
  mainnet: 'https://mainnet.infura.io/v3/7213b5d53a4943b7af08a9cfce1cf2e2',
  sepolia: 'https://sepolia.infura.io/v3/7213b5d53a4943b7af08a9cfce1cf2e2',
  goerli: 'https://goerli.infura.io/v3/7213b5d53a4943b7af08a9cfce1cf2e2',
  ozone: 'https://node1.ozonechain.io',
}

const setupWeb3 = () => new Promise((resolve, reject) => {
  const activeNetworkName = ({
    1: 'mainnet',
    5: 'goerli',
    11155111: 'sepolia',
    4000: 'ozone'
  })[window.ethereum && window.ethereum.networkVersion]

  const network = networks[activeNetworkName]
  const web3 = new window.Web3(window.ethereum || window.Web3.givenProvider || new window.Web3.providers.HttpProvider(network))

  if (web3) {
    setState({ web3 })
    resolve()
  }
  else {
    reject()
  }
})


export default setupWeb3
