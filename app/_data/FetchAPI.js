export const userData = async (ethereumId, setIsLoading) => {
  try {
    // Show loader
    setIsLoading(true);

    const res = await fetch(`/api/users/${ethereumId}`, {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();

    // Hide loader
    setIsLoading(false);

    return data;
  } catch (error) {
    // Hide loader in case of error
    setIsLoading(false);
    console.error("Error fetching user data:", error);
  }
};

export const createUser = async (userDetails, setIsLoading) => {
  try {
    // Show loader before starting the request
    setIsLoading(true);

    // console.log(userDetails);

    const res = await fetch("/api/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (!res.ok) {
      const errorMessage = `HTTP error! Status: ${res.status}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const data = await res.json();
    // console.log("User created successfully:", data);

    // Return the created user data
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    // Optionally return an error message or null to indicate failure
    return null;
  } finally {
    // Ensure loader is hidden after the request, regardless of outcome
    setIsLoading(false);
  }
};

export const updateUser = async (ethereumId, updatedData, setIsLoading) => {
  try {
    // Show loader before the request
    setIsLoading(true);
    console.log(updatedData,ethereumId,"THIS FROM FETCH API")

    const res = await fetch(`/api/users/${ethereumId}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    console.log(res);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("User updated successfully:", data);

    // Hide loader after the operation is complete
    setIsLoading(false);

    return data;
  } catch (error) {
    // Hide loader in case of error
    setIsLoading(false);
    console.error("Error updating user:", error);
  }
};

export const updateReferredUser = async (code, updatedData, setIsLoading) => {
  try {
    setIsLoading(true);
    console.log(updatedData);

    const res = await fetch(`/api/referrals/${code}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData), // Moved `body` outside of `headers`
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    console.log("User referred successfully:", data);

    // Hide loader after the operation is complete
    setIsLoading(false);

    return data;
  } catch (error) {
    setIsLoading(false);
    console.log("Error while referring the user:", error);
  }
};
