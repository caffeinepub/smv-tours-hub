import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      destination: string;
      travelDate: string;
      numPassengers: bigint;
      vehicleType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      await actor.submitInquiry(
        data.name,
        data.phone,
        data.email,
        data.destination,
        data.travelDate,
        data.numPassengers,
        data.vehicleType,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      queryClient.invalidateQueries({ queryKey: ["inquiries-count"] });
    },
  });
}

export function useGetAllInquiries() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["inquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTotalInquiriesCount() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["inquiries-count"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalInquiriesCount();
    },
    enabled: !!actor && !isFetching,
  });
}
