function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  let fortune = `You will be a ${jobTitle} in ${location} and married to
${partnerName} with ${numberOfChildren} children.`;

  return fortune;
}

let result = tellFortune("driver", "tlv", "adi", "7");
console.log(result);
