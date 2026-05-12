const grabNewMessages = async () => {
  const notificationWindow = document.querySelector('.notificationAlerts').firstElementChild
  notificationWindow.textContent = 'Loading...'
  try {  
    const data = await simulateNetworkRequest()
    notificationWindow.textContent = `You have ${data} new notification${(data === 1) ? '' : 's'}.`
    console.log(data)
  } catch (error) {
    notificationWindow.textContent = `There was an error fetching your notifications`
    console.error(error)
  }
}