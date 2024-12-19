// config.js - Advanced Web3 Configuration

// Chain Configuration
export const CHAIN_CONFIG = {
    mainnet: {
        chainId: '0x1', // 1 - Ethereum Mainnet
        chainName: 'Ethereum Mainnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://mainnet.infura.io/v3/${INFURA_API_KEY}'],
        blockExplorerUrls: ['https://etherscan.io']
    },
    testnet: {
        chainId: '0x5', // 5 - Goerli Testnet
        chainName: 'Goerli Test Network',
        nativeCurrency: {
            name: 'Goerli Ether',
            symbol: 'ETH',
            decimals: 18
        },
        rpcUrls: ['https://goerli.infura.io/v3/${INFURA_API_KEY}'],
        blockExplorerUrls: ['https://goerli.etherscan.io']
    }
};

// Application Configuration
export const APP_CONFIG = {
    name: 'Rekt Developers Donation Platform',
    version: '1.0.0',
    description: 'Support Rekt Developers through ETH donations',
    recipientAddress: '0x3A06322e9F1124F6B2de8F343D4FDce4D1009869',
    minDonation: 0.001, // Minimum donation in ETH
    maxDonation: 100,   // Maximum donation in ETH
    defaultDonation: 0.01
};

// API Keys and External Services
export const API_CONFIG = {
    infuraApiKey: '8b928f1818b5444e9fd613dc3e0b2005',
    etherscanApiKey: 'YOUR_ETHERSCAN_API_KEY', // Add your Etherscan API key
    alchemyApiKey: 'YOUR_ALCHEMY_API_KEY',     // Add your Alchemy API key if needed
};

// Web3 Provider Configuration
export const WEB3_CONFIG = {
    defaultProvider: `https://mainnet.infura.io/v3/${API_CONFIG.infuraApiKey}`,
    fallbackProviders: [
        'https://cloudflare-eth.com',
        // Add additional fallback providers if needed
    ],
    networkVersion: '1', // Mainnet
    requiredNetwork: 'mainnet'
};

// Transaction Configuration
export const TRANSACTION_CONFIG = {
    gasLimit: 21000,              // Standard ETH transfer gas limit
    maxPriorityFeePerGas: null,  // Will be calculated based on network conditions
    maxFeePerGas: null,          // Will be calculated based on network conditions
    confirmationBlocks: 1,        // Number of blocks to wait for confirmation
    timeout: 60000               // Transaction timeout in milliseconds
};

// Event Names
export const EVENTS = {
    WALLET_CONNECTED: 'walletConnected',
    WALLET_DISCONNECTED: 'walletDisconnected',
    TRANSACTION_STARTED: 'transactionStarted',
    TRANSACTION_SUCCESS: 'transactionSuccess',
    TRANSACTION_FAILED: 'transactionFailed',
    NETWORK_CHANGED: 'networkChanged',
    ACCOUNTS_CHANGED: 'accountsChanged',
    CHAIN_CHANGED: 'chainChanged'
};

// Error Messages
export const ERROR_MESSAGES = {
    NO_PROVIDER: 'No Ethereum provider found. Please install MetaMask.',
    WRONG_NETWORK: 'Please connect to the correct network.',
    CONNECT_FAILED: 'Failed to connect wallet.',
    TRANSACTION_FAILED: 'Transaction failed.',
    INSUFFICIENT_FUNDS: 'Insufficient funds for transaction.',
    INVALID_AMOUNT: 'Please enter a valid amount.',
    USER_REJECTED: 'User rejected the transaction.',
    NETWORK_ERROR: 'Network error. Please try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
    WALLET_CONNECTED: 'Wallet connected successfully!',
    TRANSACTION_SENT: 'Transaction sent successfully!',
    TRANSACTION_CONFIRMED: 'Transaction confirmed!',
    DONATION_RECEIVED: 'Thank you for your donation!'
};

// UI Configuration
export const UI_CONFIG = {
    theme: {
        primary: '#6366f1',
        secondary: '#14b8a6',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#f8fafc',
        textSecondary: '#94a3b8',
        error: '#ef4444',
        success: '#22c55e'
    },
    animation: {
        duration: 300,
        loadingTimeout: 5000
    },
    notifications: {
        position: 'top-right',
        duration: 5000,
        animationDuration: 300
    }
};

// Web3 Event Handlers Configuration
export const WEB3_EVENTS_CONFIG = {
    subscriptions: {
        pendingTransactions: true,
        newBlockHeaders: true,
        logs: true
    },
    polling: {
        interval: 15000, // 15 seconds
        blockConfirmations: 1
    }
};

// Network Status Checker Configuration
export const NETWORK_CHECKER_CONFIG = {
    pingInterval: 30000,  // Check network status every 30 seconds
    timeout: 5000,       // Network request timeout
    retryAttempts: 3,    // Number of retry attempts for failed requests
    endpoints: [
        'https://api.etherscan.io/api',
        'https://eth-mainnet.alchemyapi.io/v2/your-api-key'
    ]
};

// Gas Price Configuration
export const GAS_PRICE_CONFIG = {
    updateInterval: 10000,     // Update gas price every 10 seconds
    maxGasPrice: '300',       // Maximum gas price in Gwei
    gasPriceMultiplier: 1.1,  // Multiply estimated gas price by this factor
    priorityFeeLevels: {
        low: 1,
        medium: 2,
        high: 3
    }
};

// Initialize Web3 configuration with environment detection
export const initializeWeb3Config = () => {
    const isProduction = process.env.NODE_ENV === 'production';
    const chainConfig = isProduction ? CHAIN_CONFIG.mainnet : CHAIN_CONFIG.testnet;
    
    return {
        ...WEB3_CONFIG,
        networkVersion: isProduction ? '1' : '5',
        requiredNetwork: isProduction ? 'mainnet' : 'goerli',
        chainConfig
    };
};

// Utility function to validate Ethereum address
export const validateAddress = (address) => {
    if (!address) return false;
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return false;
    return true;
};

// Export all configurations as a single object
export const CONFIG = {
    APP: APP_CONFIG,
    CHAIN: CHAIN_CONFIG,
    API: API_CONFIG,
    WEB3: WEB3_CONFIG,
    TRANSACTION: TRANSACTION_CONFIG,
    EVENTS,
    ERRORS: ERROR_MESSAGES,
    SUCCESS: SUCCESS_MESSAGES,
    UI: UI_CONFIG,
    WEB3_EVENTS: WEB3_EVENTS_CONFIG,
    NETWORK_CHECKER: NETWORK_CHECKER_CONFIG,
    GAS_PRICE: GAS_PRICE_CONFIG,
    initialize: initializeWeb3Config,
    validateAddress
};

export default CONFIG;
